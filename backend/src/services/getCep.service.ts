import axios from "axios";

export const getCepService = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, "");

    const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);

    if (response.data.erro) {
        throw new Error("CEP inválido");
    }

    return {
        cep: response.data.cep,
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf
    };
};