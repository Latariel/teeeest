import React, {useState} from 'react';
import './App.scss';



function App() {
    const [open, setOpen] = React.useState(false);

    const [selectedValue, setSelectedValue] = useState('');
    //
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [phoneNumber, setPhoneNumber] = useState('');

    const numberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className=" open-modal-btn">🦟 Заказать звонок</button>

            <div className={`overlay animated ${open ? 'show' : ''}` }>
                <div className="modal">
                    <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                        <title />
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    <form name="regisrration" className="form" method="post">
                        <div className="login">
                        </div>
                        <div >
                        <label htmlFor="phoneNumber" style={{ display: 'none' }}>
                            Введите номер телефона
                        </label>
                        <input
                            className="telephone"
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={numberChange}
                            placeholder="Введите номер телефона "
                            aria-label="Enter phone number"
                            required
                        />
                        </div>
                        <div className='time1'>
                        <select id="dropdown" className='time' required value="Удобное время для звонка" value={selectedValue} onChange={handleChange}>
                            <option value="">Удобное время для звонка</option>
                            <option value="option1">11:00</option>
                            <option value="option2">11:30</option>
                            <option value="option3">12:00</option>
                            <option value="option4">12:30</option>
                            <option value="option5">13:00</option>
                            <option value="option6">13:30</option>
                            <option value="option7">14:00</option>
                        </select>
                        </div>

                    </form>
                    <button className='order' onClick={() => setOpen(false)}>Отправить</button>
                </div>

            </div>
        </div> );
            }

            export default App;
