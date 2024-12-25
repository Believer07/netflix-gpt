const Stopwatch = () => {

    let input = 3661;

    const startTimer = () => {
        let hr = 1;
        let min = 1;
        let sec = 1
        while(hr!=0 && min!=0 && sec!=0){
            console.log(hr, ":", min, ":", sec);
            if(sec==0 && min!=0){
                min=min-1;
            }
            if(min==0 && hr!=0){
                hr--;
            }
            sec--;
        }

    }

    return <div>
            <button onClick={startTimer}>Start</button>
    </div>
}

export default Stopwatch;