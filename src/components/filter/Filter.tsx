import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Filter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value.toLowerCase().trim());
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!value) {
      toast.error("Not write");
      return;
    }
    navigate(`/Search/${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          value={value}
          onChange={handleChangeInput}
        />
        <button>wefwefw</button>
      </form>
    </div>
  );
};

export default Filter;
