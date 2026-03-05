import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      const formEl = evt.currentTarget;

      if (!formEl.checkValidity() || !category) {
        formEl.reportValidity();
        setError("Veuillez remplir tous les champs.");
        onError(new Error("Veuillez remplir tous les champs."));
        return;
      }

      setError("");
      setSending(true);

      try {
        await mockContactApi();
        setSending(false);
        onSuccess();
        formEl.reset();
        setCategory("");
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError, category]
  );

  return (
    <form onSubmit={sendContact} noValidate>
      <div className="row">
        <div className="col">
          <Field name="lastName" placeholder="" label="Nom" required />
          <Field name="firstName" placeholder="" label="Prénom" required />

          <Select
            selection={["Personel", "Entreprise"]}
            onChange={(val) => setCategory(val?.target?.value ?? val)}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />

          {/* Catégorie requise même si Select est custom */}
          <input type="hidden" name="category" value={category} required />

          <Field
            name="email"
            placeholder=""
            label="Email"
            required
            typeInput="email"
          />

          {error && <p role="alert">{error}</p>}

          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>

        <div className="col">
          <Field
            name="message"
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
            required
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
};

export default Form;