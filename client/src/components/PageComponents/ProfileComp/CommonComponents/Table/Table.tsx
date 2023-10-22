import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap'
import styles from './Table.module.css'
const Table = () => {
    const tableRows: React.JSX.Element[] = [];
    for (let i : number = 0; i < 8; i++) {
        const row : React.JSX.Element = (
            <tr key={i}>
                <td className={styles.tableText}>Level 1-5</td>
                <td className={styles.tableText}>&lt;10000 USDT</td>
                <td className={styles.tableText}>&gt;= 0 USDT</td>
                <td className={styles.tableText}>0.1000 % / 0.1000 %</td>
            </tr>
        );
        tableRows.push(row);
    }
    return(
        <BootstrapTable>
            <thead>
            <tr>
                <th className={styles.tableSectionName}>Level</th>
                <th className={styles.tableSectionName}>Trade Volume (30d)</th>
                <th className={styles.tableSectionName}>USDT Balance</th>
                <th className={styles.tableSectionName}>Maker / Taker</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </BootstrapTable>
    )
}
export default Table;