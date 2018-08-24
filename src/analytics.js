document.analyticsData = [];

const analyticsStats = () => {
  const rawSize = JSON.stringify(document.analyticsData).length;
  let size = '';

  if (rawSize > 1000) {
    size = rawSize/1000 + " kBytes";
  }

  if (rawSize > 1000000) {
    size = rawSize/1000000 + " mBytes";
  }

  console.log({
    entries: document.analyticsData.length,
    size,
  });
}

const mouseAnalyticsHandler = (event) => {
  document.analyticsData.push({
    type: event.type,
    timestamp: event.timeStamp,
    buttons: event.buttons,
    pagePosition: {
      x: event.pageX,
      y: event.pageY,
    },
    clientPosition: {
      x: event.clientX,
      y: event.clientY,
    },
    keys: {
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
    },
  });
  analyticsStats();
}

const scrollAnalyticsHandler = (event) => {
  document.analyticsData.push({
    type: event.type,
    timestamp: event.timeStamp,
  });
  analyticsStats();
}

const keyboardAnalyticsHandler = (event) => {
  document.analyticsData.push({
    type: event.type,
    timestamp: event.timeStamp,
    key: event.key,
    keycode: event.keyCode,
  });
  analyticsStats();
}

document.onscroll = scrollAnalyticsHandler;
document.onmouseup = mouseAnalyticsHandler;
document.onmousedown = mouseAnalyticsHandler;
document.onmousemove = mouseAnalyticsHandler;
document.onmouseleave = mouseAnalyticsHandler;
document.onmouseenter = mouseAnalyticsHandler;
document.onkeydown = keyboardAnalyticsHandler;
document.onkeyup = keyboardAnalyticsHandler;
