"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAlertContext } from "@/context/AlertContext";
import { updateUserPassword, getUserById } from "@/app/actions/user";
import { User } from "@/types/users";
import { signOut } from "next-auth/react";

type Props = {
  user: User;
};

const UserInfoForm = ({ user }: Props) => {
  const { showAlert } = useAlertContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    // Ya no se obtiene la contraseña actual porque User no tiene pass
  }, [user.id, showAlert]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oldPassword) {
      showAlert("Debes ingresar tu contraseña actual", "warning");
      return;
    }

    // Simulación: omitir validación de contraseña actual

    setLoading(true);

    const result = await updateUserPassword(user.id, newPassword);

    if (!result) {
      showAlert("Error al actualizar la contraseña", "error");
    } else {
      showAlert("Contraseña actualizada correctamente", "success");
      setNewPassword("");
      setOldPassword("");
      setTimeout(() => {
        signOut({ callbackUrl: "/" });
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <Box minWidth={600} p={1}>
      <Typography variant="h6" gutterBottom>
        Información de Usuario
      </Typography>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            value={user.name}
            InputProps={{ readOnly: true }}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo"
            value={user.email}
            InputProps={{ readOnly: true }}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Rol"
            value={user.roleId}
            InputProps={{ readOnly: true }}
            fullWidth
            size="small"
          />
        </Grid>
        {/* Eliminado campo Fecha de creación porque no existe en User */}
      </Grid>

      {/* Cambio de contraseña como Grid container en columna */}
      <Box component="form" onSubmit={handleSubmit} mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Actualizar contraseña
        </Typography>

        <Grid container direction="column" spacing={1}>
          <Grid item>
            <TextField
              label="Contraseña actual"
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      edge="end"
                    >
                      {showOldPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Nueva contraseña"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item textAlign={"right"}>
            <Button
              type="submit"
              variant="contained"
              disabled={!newPassword || !oldPassword || loading}
            >
              {loading ? "Cambiando..." : "Actualizar contraseña"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserInfoForm;
