import { useState } from "react";
import InputComponent from "../InputComponent";
import { FaWeightHanging, FaRuler } from "react-icons/fa";

export default function CardImc(){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    return (
        <div className="w-[60%] p-4 min-h-[300px] bg-[#ffffff21] rounded-xl flex flex-col">
            <div className="w-full">
                <p className="font-bold text-[35px]">Calculadora-IMC</p>
                <div className="w-[250px] h-[5px] bg-[#7920bc] rounded-md"></div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-4 items-center">
                <InputComponent 
                    label={"Altura"}
                    icone={<FaRuler color="#000"/>}
                    valorFinal={"cm"}

                />
                <InputComponent
                    label={"Peso"}
                    icone={<FaWeightHanging color="#000"/>}
                    valorFinal={"kg"}
                />
                <button className="w-[90%] h-[40px] rounded-md bg-[#7920bc] mt-2 font-bold">Calcular</button>
            </div>
        </div>
    );
}