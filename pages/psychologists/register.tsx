import React, { useState } from "react";
import PsychologistsService from "@/services/PsychologistsService";

const Register = () => {
  const [psychologist, setPsychologist] = useState<Record<string, any>>();

  const createPsychologist = async () => {
    try {
      const response = (await PsychologistsService.create(psychologist)).data;
      setPsychologist(response.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      {/* Make it simple, with the same fields as in the /edit page */}
      Register
    </div>
  );
};

export default Register;
