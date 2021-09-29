import Input from "./components/Input";
function App() {
  return (
    <div>
      <h2>Input</h2>
      <span className="span">&#60;Input /&#62;</span>
      <span className="span">&:hover &:focus</span>
      <Input placeholder="Placeholder" focus="inputFocused" />

      <span className="span">&#60;Input error /&#62;</span>
      <span className="span">&:hover &:focus</span>
      <Input placeholder="Placeholder" error="error" />

      <span className="span">&#60;Input disabled /&#62;</span>
      <Input disabled placeholder="Placeholder" />

      <div className="row">
        <div className="helpertext">
          <span className="span">
            &#60;helperText="Some interesting text" /&#62;
          </span>
          <Input placeholder="Placeholder" helperText="Some interesting text" />
        </div>
        <div className="helpertext">
          <span className="span">
            &#60;helperText="Some interesting text" error /&#62;
          </span>
          <Input
            placeholder="Placeholder"
            helperText="Some interesting text"
            error="error"
          />
        </div>
      </div>

      <div className="spanText">
        <span className="span">&#60;Input startIcon /&#62;</span>
        <span className="span rightside">&#60;Input endIcon /&#62;</span>
      </div>
      <div className="row">
        <Input placeholder="Placeholder" startIcon="call" />
        <Input placeholder="Placeholder" endIcon="lock" />
      </div>

      <span className="span">&#60;value="text" /&#62;</span>
      <Input value="text" placeholder="Placeholder" />

      <div className="spanText">
        <span className="span">&#60;Input size="sm" /&#62;</span>
        <span className="span rightside">&#60;Input size="md" /&#62;</span>
      </div>
      <div className="row">
        <Input size="sm" placeholder="Placeholder" />
        <Input size="md" placeholder="Placeholder" />
      </div>

      <span className="span">&#60;Input fullWidth /&#62;</span>
      <Input fullWidth placeholder="Placeholder" />

      <span className="span">&#60;Input multiline row="4" /&#62;</span>
      <Input multiline row="4" placeholder="Placeholder" />
    </div>
  );
}
export default App;
