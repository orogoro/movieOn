import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import magnifyingGlass from "../../images/magnifyingGlass.png";

import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value.toLowerCase().trim());
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1000);

    if (!value) {
      toast.error("You didn't enter anything");
      return;
    }

    navigate(`/Search/${value}`);
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="search"
        autoComplete="off"
        value={value}
        onChange={handleChangeInput}
      />
      <button className={styles.button} disabled={disabled}>
        <img
          className={styles.image}
          src={magnifyingGlass}
          alt="Magnifying glass"
        />
      </button>
    </form>
  );
};

export default Filter;
