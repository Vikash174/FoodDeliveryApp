const BillSummary = () => {
  return (
    <div className="bill-details-container">
      <h4>Bill Details</h4>

      <table>
        <tr>
          <td>Item Total</td>
          <td>₹960</td>
        </tr>
        <tr>
          <td>Delivery Fee | 10.1 kms</td>
          <td>₹960</td>
        </tr>
        <tr>
          <td>Delivery Tip</td>
          <td>₹960</td>
        </tr>
        <tr>
          <td>Platform fee</td>
          <td>₹3</td>
        </tr>
        <tr>
          <td>GST and Restaurant Charges</td>
          <td>₹48.57</td>
        </tr>
      </table>
    </div>
  );
};

export default BillSummary;
