import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
//Import Material React Table Translations
import { MRT_Localization_ES } from "material-react-table/locales/es";
import BranchService from "../../../../services/apiRequest/Crud/BranchService";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import SuccessNotification from "../../../notifications/Notification";
import DeleteDialog from "../DeleteDialog";

const BranchCrud = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState({ isLoading: true });
  const [showNotification, setShowNotification] = useState(false);
  const [severity, setSeverity] = useState("");
  const [caller, setCaller] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [rowToEliminate, setRowToEliminate] = useState(null);

  useEffect(() => {
    BranchService.getBranches(setTableData, setIsLoading);
  }, []);

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      BranchService.putBranch(values).then((resp) => {
        if (resp.ok) {
          setShowNotification(true);
          setSeverity("success");
          setCaller("Edit");
        } else {
          setShowNotification(true);
          setSeverity("error");
          setCaller("Error");
        }
      });
      tableData[row.index] = values;
      setTableData([...tableData]);
      exitEditingMode();
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      setOpenDeleteDialog(false);
      BranchService.deleteBranch(row.getValue("id")).then((response) => {
        if (response.ok) {
          setShowNotification(true);
          setSeverity("success");
          setCaller("Delete");
          tableData.splice(row.index, 1);
          setTableData([...tableData]);
        } else {
          setShowNotification(true);
          setSeverity("error");
          setCaller("Delete");
        }
      });
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid = validateRequired(event.target.value);

          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} es requerido`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },

    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        size: 80,
      },
      {
        accessorKey: "cif",
        header: "Cif",
        size: 140,
        enableClickToCopy: true,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "name",
        header: "Nombre",
        size: 140,
        enableClickToCopy: true,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "population",
        header: "Población",
        enableClickToCopy: true,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "country",
        header: "País",
        size: 80,
        enableClickToCopy: true,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "address",
        header: "Dirección",
        size: 80,
        enableClickToCopy: true,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal"
        enableEditing
        enableColumnOrdering
        localization={MRT_Localization_ES}
        state={isLoading}
        initialState={{ density: "compact" }}
        enableStickyHeader
        enableStickyFooter
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Editar">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Eliminar">
              <IconButton
                color="error"
                onClick={() => {
                  setOpenDeleteDialog(true);
                  setRowToEliminate(row);
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Añadir
          </Button>
        )}
      />
      <CreateNewBranchModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
        setShowNotification={setShowNotification}
        setSeverity={setSeverity}
        setCaller={setCaller}
      />
      <SuccessNotification
        open={showNotification}
        setShowNotification={setShowNotification}
        severity={severity}
        caller={caller}
      />
      <DeleteDialog
        open={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        handleDeleteRow={handleDeleteRow}
        row={rowToEliminate}
      />
    </>
  );
};

//Dialog Add Branch
export const CreateNewBranchModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  setShowNotification,
  setSeverity,
  setCaller,
}) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const handleSubmit = async () => {
    for (const key in values) {
      let label = "";

      switch (key) {
        case "id":
          label = "Id";
          break;
        case "cif":
          label = "Cif";
          break;
        case "name":
          label = "Nombre";
          break;
        case "population":
          label = "Población";
          break;
        case "country":
          label = "País";
          break;
        case "address":
          label = "Dirección";
          break;
        default:
          break;
      }

      validateField(key, values[key], label);
    }
    delete values["id"];
    const isValid = Object.values(values).every((x) => x !== "");

    if (isValid) {
      setIsLoadingButton(true);
      await BranchService.postNewBranch(values).then((response) => {
        if (response.isOk) {
          values.id = response.id;
          setIsLoadingButton(false);
          setShowNotification(true);
          setSeverity("success");
          setCaller("Add");
          onSubmit(values);
          onClose();
        }
      });
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const label = event.target.labels[0].innerText;
    setValues({ ...values, [name]: value });
    validateField(name, value, label);
  };
  const validateField = (fieldName, value, label) => {
    if (!value) {
      setValidationErrors((prevState) => ({
        //si extraen todos los valores anteriores...
        ...prevState,
        //Se establece el campo y su valor dinámicamente
        [fieldName]: `${label} es requerido`,
      }));
    } else {
      setValidationErrors((prevState) => ({
        //si extraen todos los valores anteriores...
        ...prevState,
        //Se establece el campo y su valor dinámicamente
        [fieldName]: ``,
      }));
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Añadir Sucursal</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {columns.map((column) => {
              if (column.accessorKey == "id") {
                return null;
              }
              const error = validationErrors[column.accessorKey] || false;

              return (
                <TextField
                  key={column.accessorKey}
                  label={column.header}
                  name={column.accessorKey}
                  onChange={handleInputChange}
                  error={!!error}
                  helperText={error}
                  /* onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  } */
                />
              );
            })}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button
          onClick={() => {
            setValidationErrors({});
            onClose();
          }}
        >
          Cancelar
        </Button>
        <LoadingButton
          loading={isLoadingButton}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleSubmit}
        >
          Añadir
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;

export default BranchCrud;
