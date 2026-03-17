import { useState } from 'react';
import { useKakaoPostcodePopup } from 'react-daum-postcode';

const DaumPost = () => {
    const [address, setAddress] = useState({add: '', zone: ''});
    
    const open = useKakaoPostcodePopup();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setAddress({a: fullAddress, z: data.zonecode});

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

        console.log(data);
        console.log(data.zonecode);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <>
            <input type="text" placeholder='주소' value={address.a}/><br />
            <input type="text" placeholder='상세주소' /><br />
            <input type="text" placeholder='우편번호' value={address.z}/><br />

            <button type='button' onClick={handleClick}>
                Open
            </button>
        </>
    );
};

export default DaumPost;