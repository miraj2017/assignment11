import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h1>This is a service section</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("place", { required: true, maxLength: 20 })}
          placeholder="place"
        />
        <input {...register("cost")} placeholder="cost" />
        <input {...register("img")} placeholder="img" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
