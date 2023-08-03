import {useState} from 'react';

function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
        const hanldeFormSubmit = (event) =>{
        event.preventDefault();
        debugger;
        search('coke');
    };
    const handleChange = (event)=>{
        setValue(event.target.value)
    }

    return( 
    <div className='searchDiv'>
        <form onSubmit={hanldeFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={valueInput} onChange={handleChange} />
        </form>
    </div> 
    );
}

export default SearchHeader; 