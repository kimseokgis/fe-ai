import {postWithBearer} from "https://jscroot.github.io/api/croot.js";
import {GetDataForm,ResponsePost} from "../config/config.js";
import {token,URLRegister} from "../template/template.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formRegister");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(URLRegister, token, data, ResponsePost)
    });
});