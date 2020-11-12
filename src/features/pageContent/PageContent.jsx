import React from "react";
import Contact from "../contact/Contact";
import styles from "./Page.module.css";
import _ from "lodash";
export default function PageContent({
  title,
  subTitle,
  paragraphs,
  image,
  buttons,
}) {
  let headers = ["Column one", "Column two"];
  let tableData = ["row data a", "row data b"];
  return (
    <div className={styles.page__content__root}>
      <h1>{title && title}</h1>
      <h2>{subTitle && subTitle}</h2>
      <div className="category__container">
        <div className={styles.category__image__container}>
          {image && <img src={image.src} alt={image.alt} />}
        </div>
        <div className={styles.page__content__button__container}>
          {_.map(buttons, (button, key) => {
            return (
              <div>
                <button key={key} onClick={button.handleClick}>
                  {button.buttonName}
                </button>
              </div>
            );
          })}
        </div>
        {title === "Services" && (
          <div>
            <table>
              <tr className={styles.page__table__header__row}>
                {_.map(headers, (header, key) => {
                  return (
                    <th key={key} className={styles.page__table__header}>
                      {header}
                    </th>
                  );
                })}
              </tr>
              <tr>
                {_.map(tableData, (data, key) => {
                  return (
                    <td key={key} className={styles.page__table__data}>
                      {data}
                    </td>
                  );
                })}
              </tr>
            </table>
          </div>
        )}
        {title === "Lets connect" && <Contact />}
        <div className={styles.paragraphs__container}>
          {paragraphs &&
            _.map(paragraphs, (paragraph, key) => {
              return <p key={key}>{paragraph}</p>;
            })}
        </div>
      </div>
    </div>
  );
}
