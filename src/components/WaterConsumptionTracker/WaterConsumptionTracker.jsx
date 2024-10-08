import css from "./WaterConsumptionTracker.module.css";
import { Link } from "react-router-dom";

// const handleClick = () => {
//   alert("I'm a button!");
// };

export default function WaterConsumptionTracker() {
  return (
    <div className={css.container}>
      <div className={css.titlesContainer}>
        <h1 className={css.title}>Water consumption tracker</h1>
        <h2 className={css.secondaryTitle}>
          Record daily water intake and track
        </h2>
      </div>
      <div className={css.benefitsContainer}>
        <h3 className={css.listTitle}>Tracker Benefits</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href="icons.svg#icon-calendar"></use>
            </svg>
            <p className={css.itemText}>Habit drive</p>
          </li>
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href="icons.svg#icon-presentation-chart-bar"></use>
            </svg>
            <p className={css.itemText}>View statistics</p>
          </li>
          <li className={css.listItem}>
            <svg className={css.icon}>
              <use href="icons.svg#icon-wrench-screwdriver"></use>
            </svg>
            <p className={css.itemText}>Personal rate setting</p>
          </li>
        </ul>
      </div>
      <nav>
        <Link to="/signup" className={css.button}>
          Try tracker
        </Link>
      </nav>
    </div>
  );
}
