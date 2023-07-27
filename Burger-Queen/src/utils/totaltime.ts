const calculateTotalPreparationTime = (dataEntry: string, dataDelivering: string) => {
  const entryTime = new Date(dataEntry).getTime();
  const deliveringTime = new Date(dataDelivering).getTime();
  const totalTime = deliveringTime - entryTime;

  const hours = Math.floor(totalTime / (1000 * 60 * 60));
  const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

  let totalTimeStr = '';
  if (hours > 0) {
    totalTimeStr += `${hours}h `;
  }
  totalTimeStr += `${minutes}m ${seconds}s`;

  return totalTimeStr;
};

export default calculateTotalPreparationTime;