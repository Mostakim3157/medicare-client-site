import Title from "../../../Components/Title";

const PaymentHistory = () => {
  return (
    <section>
      <Title title={"Payment Status"} />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>$50</td>
              <td>txn_05434534501</td>
              <td>Completed</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>$75</td>
              <td>txn_03543453402</td>
              <td>Pending</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>$100</td>
              <td>txn_005345353453</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>$50</td>
              <td>txn_05434534501</td>
              <td>Completed</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>$75</td>
              <td>txn_03543453402</td>
              <td>Pending</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>$100</td>
              <td>txn_005345353453</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentHistory;
