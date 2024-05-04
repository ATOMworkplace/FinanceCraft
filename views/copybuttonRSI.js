    document.getElementById("copyButton").addEventListener("click", function() {
        const codeToCopy = `//@version=5
indicator("RSI Based Strategy with Stop Loss", overlay=true)
        
length = input(14)
overSold = input(30)
overBought = input(70)
price = close
vrsi = ta.rsi(price, length)
crossover = ta.crossover(vrsi, overSold)
crossunder = ta.crossunder(vrsi, overBought)
        
long = crossover and not na(vrsi)
short = crossunder and not na(vrsi)
        
var float stopLossLong = na
var float stopLossShort = na
        
if long
    stopLossLong := low[1]
if short
    stopLossShort := high[1]
        
plotshape(long, style=shape.labelup, location=location.belowbar, color=color.new(#00ff2f, 43), size=size.large, text='Buy', textcolor=color.new(color.white, 0))
plotshape(short, style=shape.labeldown, location=location.abovebar, color=color.new(#ff0000, 36), size=size.large, text='Sell', textcolor=color.new(color.white, 0))
        
// Plot stop loss levels on the chart
plotshape(long, style=shape.triangleup, location=location.belowbar, color=color.red, size=size.small, text='Stop Loss', textcolor=color.white)
plotshape(short, style=shape.triangledown, location=location.abovebar, color=color.green, size=size.small, text='Stop Loss', textcolor=color.white)
        
// Plot horizontal lines for stop loss levels
plot(stopLossLong, color=color.red, style=plot.style_line, title="Stop Loss Long")
plot(stopLossShort, color=color.green, style=plot.style_line, title="Stop Loss Short") `;

        const textArea = document.createElement("textarea");
        textArea.value = codeToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Code Copied for RSI !!");
    });