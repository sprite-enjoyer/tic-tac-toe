
const isDraw = (arr) => {
    for (let i = 0; i < 3; i++) if (arr[i].includes(0)) return (false);
    return (true);
}

export default isDraw;