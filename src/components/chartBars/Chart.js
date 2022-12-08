import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    const monthValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const calcMaxValue = Math.max(...monthValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={calcMaxValue} />
            })}
        </div>
    )
}
export default Chart;