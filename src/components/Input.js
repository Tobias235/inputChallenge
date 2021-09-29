import { Fragment, useState } from "react";
import "./Input.css";

function Input(props) {
  const [inputValue, setInputValue] = useState(props.value || "");

  const container = props.multiline ? "textarea" : "container";

  const disable = props.disabled ? "disabled" : "";
  const helperText = props.helperText;
  const helperTextError = props.error ? (
    <small className={"helperTextError"}>{helperText}</small>
  ) : (
    <small className={"helperText"}>{helperText}</small>
  );
  const checkDisabled = props.disabled ? props.disabled : "";
  const classList =
    (props.error ? props.error : "") +
    (props.hover ? " " + props.hover : "") +
    (props.fullWidth ? " fullWidth" : "") +
    (props.size ? " " + props.size : "") +
    (props.focus ? " " + props.focus : "");

  const textArea = (
    <textarea
      placeholder={props.placeholder}
      rows={props.row}
      className={classList}
    >
      {props.children}
    </textarea>
  );
  const input = (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      disabled={checkDisabled}
      placeholder={props.placeholder}
    />
  );
  return (
    <Fragment>
      <div className={`${classList} ${disable} ${container}`}>
        {props.startIcon ? (
          <span className={"material-icons"}>{props.startIcon}</span>
        ) : (
          ""
        )}
        {!props.multiline ? input : textArea}

        {props.endIcon ? (
          <div className="icon">
            <span className={"material-icons end"}>{props.endIcon}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      {helperTextError}
    </Fragment>
  );
}

export default Input;
