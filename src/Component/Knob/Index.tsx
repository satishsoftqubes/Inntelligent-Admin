import { CircularInput, CircularProgress, CircularTrack } from "react-circular-input";

function RoundKnob(props: any) {
  const stepValue = (v: number) => Math.round(v * 1) / 100;

  return (
    <CircularInput value={stepValue(props.roundKnobValue)}>
      <CircularTrack stroke="#C6D0ED" strokeWidth={40} />
      <CircularProgress className="knob-progress-color" />
      <text x={100} y={100} textAnchor="middle" dy="0.3em" fontWeight="bold">
        {Math.round(stepValue(props.roundKnobValue) * 100)}%
      </text>
    </CircularInput>
  );
}

export default RoundKnob;
