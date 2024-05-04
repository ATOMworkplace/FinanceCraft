document.getElementById("copybuttonVWAP").addEventListener("click", function() {
  const codeToCopy = `//@version=5
strategy("VWAP Buy/Sell Strategy with Volume Filter", shorttitle="VWAP Strategy", overlay = true)
  
// Input for VWAP length
vwapLength = input.int(15, title = "VWAP Length")
  
// Input for minimum volume
minVolume = input.float(400000, title = "Minimum Volume")
  
// Calculate VWAP
vwap = ta.vwma(close, vwapLength)
  
// Calculate the crossover condition
crossUpCondition = ta.crossover(close, vwap) and volume > minVolume
crossDownCondition = ta.crossunder(close, vwap) and volume > minVolume
  
// Define and execute buy and sell actions
if (crossUpCondition)
    strategy.entry("Buy", strategy.long)
  
if (crossDownCondition)
    strategy.entry("Sell", strategy.short)
   `;

  const textArea = document.createElement("textarea");
  textArea.value = codeToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Code Copied for VWAP !!");
});