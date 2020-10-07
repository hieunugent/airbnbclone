import React, {useState} from 'react'
import "./DatePicker.css"
import { Calendar, DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange={
        startDate: startDate, 
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
      <div className="datepicker">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          color="#19575C"
          rangeColors="#19575C"
        />
      </div>
    );
}

export default DatePicker
