// src/components/organisms/Calendar/Calendar.tsx

import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import styles from './calendar.module.css';

type CalendarProps = {
    onSelectDate: (date: string) => void;
}

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange = (value: any) => {  // 일시적으로 `any` 타입 사용
        if (value instanceof Date) {
            setSelectedDate(value);
        } else {
            setSelectedDate(null);
        }
    }

    return (
        <div className={styles.calendarContainer}>

        <DatePicker
            onChange={handleDateChange}
            value={selectedDate}
            clearIcon={null}
        />
        </div>
    );
};

export default Calendar;
