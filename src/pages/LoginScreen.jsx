import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { login } from "../api/authApi";
import { ToastContainer, toast, Zoom } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import "react-toastify/dist/ReactToastify.css";
import "../css/login.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import pass from "../assets/precio.png";

const LoginScreen = ({ darkMode, IsLoggedIn, handlesetIsLoggedIn }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const inicioSesion = async (data) => {
    setLoading(true);
    const respuesta = await login(data);
    setLoginUser(respuesta);

    if (respuesta?.token) {
      localStorage.setItem("token", JSON.stringify(respuesta.token));
      localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));
      handlesetIsLoggedIn();
      navigate("/");
    }

    if (respuesta.msg) {
      notify(respuesta.msg); // Pasar la respuesta.msg en lugar de respuesta
    }

    if (respuesta && respuesta.errors) {
      respuesta.errors.forEach((error) => {
        notify2(error.msg);
      });
    }

    if (loginUser && loginUser.errors && loginUser.errors.length > 0) {
      loginUser.errors.forEach((error) => {
        notify2(error.msg);
      });
    }

    reset();
    setLoading(false);
  };

  const notify = (respuesta) =>
    toast.warn(`${respuesta}`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "colored",
    });

  const notify2 = (respuesta) =>
    toast.error(`${respuesta}`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "colored",
    });

  return (
    <div className="container pt-5 mt-5 mb-5">
      <div className="d-flex justify-content-center h-100 pt-5">
        <div>
          <ToastContainer transition={Zoom} />
        </div>
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={FaUser} className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container mt-5">
            <form noValidate onSubmit={handleSubmit(inicioSesion)}>
              <div className="form-group mb-2">
                <div className="input-group m-0">
                  <div className="input-group-append col-1 mt-2">
                    <span className="input-group-text p-0 pt-1 pb-1 ps-1">
                      <FaUser className="m-1" />
                    </span>
                  </div>
                  <input
                    type="email"
                    id="Email-input"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", {
                      required: "Debe ingresar su email registrado",
                      validate: {
                        validEmailFormat: (value) => {
                          if (value.match(/ /)) {
                            return "El email no debe contener espacios.";
                          }

                          if (value.length < 5) {
                            return "Debe tener al menos 5 caracteres antes del '@'.";
                          }
                          if (!/^[^@]+@[^@]+\.com$/.test(value)) {
                            return "Ingrese un Correo válido, ej.: taza@gmail.com";
                          }
                          return true;
                        },
                      },
                    })}
                    required
                    disabled={loading ? true : false}
                  />
                </div>
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="form-group mb-2">
                <div className="input-group m-0">
                  <div className="input-group-append col-1 mt-2">
                    <span className="input-group-text p-0 pt-1 pb-1 ps-1">
                      <RiLockPasswordFill className="m-1" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password-input"
                    className="form-control"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "Debe ingresar su contraseña",
                      validate: {
                        validPasswordFormat: (value) => {
                          if (value.match(/ /)) {
                            return "La contraseña no debe contener espacios.";
                          }

                          if (value.length < 8) {
                            return "La contraseña debe tener al menos 8 caracteres.";
                          }

                          if (/[A-Z]/.test(value)) {
                            return "La contraseña no debe contener letras mayúsculas.";
                          }

                          if (/[!@#$%^&*:?¿´]/.test(value)) {
                            return "La contraseña debe contener solo letras y números.";
                          }

                          return true;
                        },
                      },
                    })}
                    required
                    disabled={loading ? true : false}
                  />
                </div>
                <p className="text-danger">{errors.password?.message}</p>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container mt-3">
                {loading ? (
                  <Button className="buttonlogin" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Iniciando...
                  </Button>
                ) : (
                  <button type="submit" className="buttonlogin">
                    Iniciar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
