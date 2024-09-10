import styled from 'styled-components';

export const CalendarStyle = styled.div`

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }

  .sectionText {
    color: #2F2F2F;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }

  .month {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr); /* Встановлено 1fr для рівномірного розподілу */
    gap: 10px;
  }

  .monthNav {
    display: flex;
    align-items: center;
  }

  .navBtn {
    display: flex;
    border: 1px solid transparent;
    background-color: transparent;
    border-radius: 50%;
    justify-content: center;
    transition: background-color 0.3s, border 0.3s;
  }

  .navBtn:hover {
    background-color: #ffffff;
    border: 1px solid #FFA500; /* Помаранчевий колір */
  }

  .dateText {
    color: #407BFF;
    width: 130px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .calendarDayBtn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color 0.3s;
    border-color: #FF9D43;
  }

  .calendarDayBtn:hover {
    box-shadow: 0 2px 4px 0 rgba(64,123,255,0.3);
  }

  .border-orange {
    border: 1px solid #FFA500; /* Помаранчевий бордер для днів з невиконаною нормою */
  }

  .today {
    background-color: #FFFFFF; /* Блакитний */
  }

  .day {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Додати позиціонування */
  }

  .progressWaterText {
    color: #00BFFF; /* Блакитний */
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 768px) {
    .month {
      grid-template-columns: repeat(7, 1fr);
    }
  }

  .activeStats {
    display: block;
  }
`;

export const LoaderMonthWrapper = styled.div`
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
`;