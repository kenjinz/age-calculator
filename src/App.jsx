import React from 'react';
import iconArrow from './assets/images/icon-arrow.svg';
function App() {
  const [isValid, setIsValid] = React.useState(true);
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [result, setResult] = React.useState({
    day: '',
    month: '',
    year: '',
  });

  const handleClick = () => {
    if (day > 0 && day < 32 && month > 0 && month < 13 && year > 0) {
      const now = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      };
      const birth = {
        day,
        month,
        year,
      };
      const diff = {
        day: now.day - birth.day,
        month: now.month - birth.month,
        year: now.year - birth.year,
      };
      if (diff.day < 0) {
        diff.month -= 1;
        diff.day += 30;
      }
      if (diff.month < 0) {
        diff.year -= 1;
        diff.month += 12;
      }
      setIsValid(true);
      setResult(diff);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-light-grey flex items-center justify-center">
      <div className="w-96 h-96 bg-white rounded-3xl rounded-br-[100px]  flex flex-col items-center justify-center px-5 sm:w-[700px] sm:h-[500px] sm:px-10">
        <div className="flex w-full flex-row justify-around sm:justify-normal sm:gap-5">
          <div className="flex flex-col">
            <p
              className={`${
                isValid ? 'text-smokey-grey' : 'text-light-red'
              } leading-5 text-xs font-bold font-Poppins`}
            >
              D A Y
            </p>
            <input
              className={`border rounded-lg w-20 sm:w-32 h-12 px-2 font-bold text-lg ${
                !isValid && 'border-light-red'
              } `}
              placeholder="DD"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
            {!isValid && (
              <p className="text-sm italic font-semibold text-light-red">
                Must be a valid day
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <p
              className={`${
                isValid ? 'text-smokey-grey' : 'text-light-red'
              } leading-5 text-xs font-bold font-Poppins`}
            >
              M O N T H
            </p>
            <input
              type="number"
              className={`border rounded-lg w-20 sm:w-32 h-12 px-2 font-bold text-lg ${
                !isValid && 'border-light-red'
              } `}
              placeholder="MM"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
            {!isValid && (
              <p className="text-sm italic font-semibold text-light-red">
                Must be a valid month
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <p
              className={`${
                isValid ? 'text-smokey-grey' : 'text-light-red'
              } leading-5 text-xs font-bold font-Poppins`}
            >
              Y E A R
            </p>
            <input
              className={`border rounded-lg w-20 sm:w-32 h-12 px-2 font-bold text-lg ${
                !isValid && 'border-light-red'
              } `}
              placeholder="YYYY"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            {!isValid && (
              <p className="text-sm italic font-semibold text-light-red">
                Must be a valid year
              </p>
            )}
          </div>
        </div>
        <div className="relative mt-10 w-full">
          <div className="border border-light-grey " />
          <div className="absolute max-sm:left-1/2 sm:right-0 ">
            <div
              className="bg-purple relative rounded-full p-4 -translate-y-1/2 max-sm:-left-1/2 "
              onClick={() => handleClick()}
            >
              <img src={iconArrow} alt="icon" width={25} height={25} />
            </div>
          </div>
        </div>
        <div className="mt-10 w-full text-6xl font-extrabold italic font-Poppins">
          <h1>
            <span className="text-purple">{result.year || '--'}</span> years
          </h1>
          <h1>
            <span className="text-purple">{result.month || '--'}</span> months
          </h1>
          <h1>
            <span className="text-purple">{result.day || '--'}</span> days
          </h1>
        </div>
      </div>
    </div>
  );
}
export default App;
