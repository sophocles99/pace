function changeValue(valueType, newValue) {
  console.log("changeValue - valueType:", valueType);
  console.log("changeValue - newValue:", newValue)
  setFunctions[valueType](newValue);
  setRecentlyChanged((currentRecentlyChanged) => {
    const newRecentlyChanged = [...currentRecentlyChanged];
    if (newRecentlyChanged[0] !== valueType) {
      newRecentlyChanged[1] = newRecentlyChanged[0];
      newRecentlyChanged[0] = valueType;
    }

    if (!newRecentlyChanged.includes("distance")) {
      console.log("setting distance")
      if (valueType === "pace") setDistance(newValue * time);
    } else {
      setDistance(pace * newValue);
    }

    if (!newRecentlyChanged.includes("pace")) {
      console.log("setting pace")
      if (valueType === "distance") setPace(time / newValue);
    } else {
      setPace(newValue / distance);
    }

    if (!newRecentlyChanged.includes("time")) {
      console.log("setting time")
      if (valueType === "pace") setTime(distance * newValue);
    } else {
      setTime(newValue * pace);
    }

    console.log(newRecentlyChanged);
    return newRecentlyChanged;
  });
}