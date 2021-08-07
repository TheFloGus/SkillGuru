import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthMeter({ password }) {
  const testResult = zxcvbn(password);
  const num = testResult.score * 25;

  function changeProgressColor() {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  }

  function changeProgressStatus() {
    switch (testResult.score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Could be better";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "none";
    }
  }

  function changeProgress() {
    return {
      backgroundColor: changeProgressColor(),
      width: `${num}%`,
      height: "10px",
      borderRadius: "10px",
    };
  }
  return (
    <>
      <div className="progress">
        <div className="progress-bar" style={changeProgress()}></div>
        <p
          className="progress-status"
          style={{ color: changeProgressColor(), fontSize: "15px" }}
        >
          {changeProgressStatus()}
        </p>
      </div>
    </>
  );
}

export default PasswordStrengthMeter;
