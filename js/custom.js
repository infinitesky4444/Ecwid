const form = document.getElementById('myForm');
const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');
const loadingPopup = document.getElementById('loadingPopup');

const courseurls = [
    {
        "course_name": "1811 All-in-One Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/1811-all-in-one-8dhqq"
    },
    {
        "course_name": "Alabama Police Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/alabama-9krq7"
    },
    {
        "course_name": "ATF Special Agent Prep Course Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/atf-xb-z2vp99"
    },
    {
        "course_name": "CBP Double Play Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/cbp-combo-xb-3vpz9"
    },
    {
        "course_name": "CBP Double Play Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/cbp-combo--std-ff7d2"
    },
    {
        "course_name": "Chicago Police Test Prep - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/chicago-xb-9ruq4"
    },
    {
        "course_name": "Chicago Police Test Prep - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/chicago-std-qmc6y"
    },
    {
        "course_name": "CHP Test Prep - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/chp-xb-8rmzpa2"
    },
    {
        "course_name": "CHP Test Prep - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/chp-std-21k"
    },
    {
        "course_name": "CJBAT QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/cjbat-2xp128"
    },
    {
        "course_name": "Connecticut Police QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/connecticut-z9j88"
    },
    {
        "course_name": "Correctional Officer Test Prep Course - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/correction-xb-pq3nz"
    },
    {
        "course_name": "Correctional Officer Test Prep Course - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/correction-std-zz3nz"
    },
    {
        "course_name": "CPS HR QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/cps-hr-8pq84b"
    },
    {
        "course_name": "CWH QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/ngle-y24zzzp"
    },
    {
        "course_name": "DEA Diversion Investigator Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/dea-di-4w1z5"
    },
    {
        "course_name": "DEA Special Agent Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/dea-xb-yz707wasp"
    },
    {
        "course_name": "DELPOE QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/delpoe-r8hq91"
    },
    {
        "course_name": "FBI Police Officer Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/fbi-police-xb-p389zq"
    },
    {
        "course_name": "FBI Special Agent Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/fbi-agent-xb-8kf1nx"
    },
    {
        "course_name": "Federal Air Marshal Test Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/fam-xb-99-z2q"
    },
    {
        "course_name": "Freebie - Accident Reconstruction Test Prep",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Tutorial%20Accident%20Reconstruction/"
    },
    {
        "course_name": "Freebie - Guide to Police Officer Selection Testing",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Lecture%20Overview%20LE%20Hiring"
    },
    {
        "course_name": "Freebie - Managing your Job Search",
        "course_link": "http://www.lawenforcementlearning.co/TUTORIALS/How%20to%20Apply/"
    },
    {
        "course_name": "Freebie - Police Officer Selection Tests by State",
        "course_link": "https://www.policetest.info/by-state/"
    },
    {
        "course_name": "Freebie - Preparing for your Panel Interview",
        "course_link": "https://www.lawenforcementlearning.co/DEMOS/Free%20Police%20Interview/"
    },
    {
        "course_name": "Freebie - Surviving the Background Investigation",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Lecture%20Background%20Investigation/"
    },
    {
        "course_name": "FrontLine QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/frontline-pw92md55"
    },
    {
        "course_name": "HSI Special Agent Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/hsi-xb-qpnn18\n"
    },
    {
        "course_name": "IPMA-HR PO-EL QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/po-el-88ysd"
    },
    {
        "course_name": "LA County Sheriff Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/la-county-sheriff-wq72"
    },
    {
        "course_name": "LAPD Test Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/lapd-1qsyyz"
    },
    {
        "course_name": "Law Enforcement Illustrated by Artificial Intelligence",
        "course_link": "https://www.lawenforcementpreparation.com/courses/lst-km29x"
    },
    {
        "course_name": "LEAB QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/leab-9dcx36"
    },
    {
        "course_name": "LST QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/leab-9dcx36"
    },
    {
        "course_name": "Mastering Bio Data Assessments",
        "course_link": "https://www.lawenforcementpreparation.com/DB-Modules/SJT739ryuxx9"
    },
    {
        "course_name": "Mastering Situational Judgment Tests",
        "course_link": "https://www.lawenforcementpreparation.com/DB-Modules/VIZ1q77pp34"
    },
    {
        "course_name": "Mastering Spatial Orientation and Visualization",
        "course_link": "https://www.lawenforcementpreparation.com/db-modules/viz1q77pp34"
    },
    {
        "course_name": "Mastering the Federal Interview for Special Agents and Analysts",
        "course_link": "https://www.lawenforcementpreparation.com/essay911"
    },
    {
        "course_name": "Mastering the Personal Essay",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Lecture%20Police%20Interview%20&w7qq9/"
    },
    {
        "course_name": "Mastering the Police Interview",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Mastering%20the%20Polygraph%20&TS$2/"
    },
    {
        "course_name": "Mastering the Polygraph & CVSA",
        "course_link": "https://www.lawenforcementlearning.co/TUTORIALS/Mastering%20the%20Psych%20Exam%20u28GGq/"
    },
    {
        "course_name": "Mastering the Psych Exam",
        "course_link": "https://www.lawenforcementpreparation.com/courses/masters-3pak-vt46s"
    },
    {
        "course_name": "Master's 3Pak",
        "course_link": "https://www.lawenforcementpreparation.com/DB-Modules/BIO945739x"
    },
    {
        "course_name": "Michigan Police Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/michigan-zzt93w"
    },
    {
        "course_name": "NCJOSI QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/ncjosi-pq378"
    },
    {
        "course_name": "New York Police Triple Play Test Prep - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/ny3-xb-p288a"
    },
    {
        "course_name": "New York Police Triple Play Test Prep - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/ny3-std-4kz1"
    },
    {
        "course_name": "NGLE QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/ngle-y24zzzp"
    },
    {
        "course_name": "NJ Police Triple Play Test Prep - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/nj-triple-xb-4kz991"
    },
    {
        "course_name": "NJ Police Triple Play Test Prep - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/nj-triple-std-84mmqq"
    },
    {
        "course_name": "NPOST QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/npost-zrgja"
    },
    {
        "course_name": "NPST QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/npst-99s66z"
    },
    {
        "course_name": "Parking Enforcement Officer Test Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/parking-2zzq89"
    },
    {
        "course_name": "PELLETB QuikPrep - Bonus Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/pelletb-xb-xj8aj"
    },
    {
        "course_name": "PELLETB QuikPrep - Standard Edition",
        "course_link": "https://www.lawenforcementpreparation.com/courses/pelletb-std-21z"
    },
    {
        "course_name": "PELLETB QuikPrep Course - Go Law Enforcement Special",
        "course_link": "https://www.lawenforcementpreparation.com/courses/pelletb-golaw-8repp"
    },
    {
        "course_name": "PoliceExam911 - Go Law Enforcement Special",
        "course_link": "https://www.lawenforcementpreparation.com/courses/px911-golaw-xb-66e4"
    },
    {
        "course_name": "PoliceExam911 Basic",
        "course_link": "https://www.lawenforcementpreparation.com/courses/px911-basic-9zxq"
    },
    {
        "course_name": "PoliceExam911 Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/px911-xb-x5s9k"
    },
    {
        "course_name": "Port Authority Police Officer Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/port-authority-uq743"
    },
    {
        "course_name": "San Diego Police Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/san-diego-ee7xq"
    },
    {
        "course_name": "Score My Writing Sample",
        "course_link": "na"
    },
    {
        "course_name": "Special Agent Entrance Exam Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/saee-xb-r2ll1"
    },
    {
        "course_name": "Texas Police Test Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/texas-77wk6"
    },
    {
        "course_name": "Triple Play Prep Course",
        "course_link": "https://www.lawenforcementpreparation.com/courses/triple-xb-wq55"
    },
    {
        "course_name": "TSA CBT QuikPrep Course",
        "course_link": "https://www.lawenforcementpreparation.com/tsa-test-prep-y7s2"
    },
    {
        "course_name": "Uniformed Division Entrance Exam Prep",
        "course_link": "https://www.lawenforcementpreparation.com/courses/udee-xb-pp7x"
    },
]




// Function to fetch data from the API
const fetchData = async (keyword) => {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/9005044/orders?email=${keyword}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer secret_vtLcku8UptgSBVTJSXHhahbRrsHG4YJV',
                'Content-Type': 'application/json'
            },
        });
        
        hideLoadingPopup();
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to connect to server', 'error');
    }
};

const generateTableRows = (items) => {
    let rows = '';

    items.forEach((item) => {
        const { createDate, items } = item;

        const utcDateTime = new Date(createDate); // Create a Date object with the UTC time

        // Convert UTC time to local time
        const localDateTime = new Date(utcDateTime.getTime() + utcDateTime.getTimezoneOffset() * 60 * 1000);

        // Format the date and time components
        const year = localDateTime.getFullYear();
        const month = String(localDateTime.getMonth() + 1).padStart(2, '0');
        const day = String(localDateTime.getDate()).padStart(2, '0');
        const hours = String(localDateTime.getHours()).padStart(2, '0');
        const minutes = String(localDateTime.getMinutes()).padStart(2, '0');
        const seconds = String(localDateTime.getSeconds()).padStart(2, '0');

        const normalTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        items.forEach((detail) => {
            const { name, imageUrl } = detail;

            courseurls.forEach((course) => {
                if (course.course_name.toLowerCase() === name.toLowerCase()) {
                    rows += `<tr>
              <td>${name}</td>
              <td>${normalTime}</td>
              <td><img src=${imageUrl} style="width: 70px"></td>
              <td><a>${course.course_link}</a></td>
            </tr>`;
                }
            })
        })

    })
        ;

    return rows;
};

// Function to handle form submission
const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const keyword = searchInput.value.trim();
    if (keyword.length > 0) {
        showLoadingPopup();
        const data = await fetchData(keyword);
        if (data.items.length > 0) {

            // Display the result
            const tableHTML = `
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Date</th>
                <th>Product</th>
                <th>Course Url</th>
              </tr>
            </thead>
            <tbody>
              ${generateTableRows(data.items)}
            </tbody>
          </table>
        `;

            resultDiv.innerHTML = tableHTML;
        }
        else showNotification('No data for this user', 'error');
    }
    else {
        showNotification('Enter your email', 'error');
    }
};

// Event listeners
form.addEventListener('submit', handleFormSubmit);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleFormSubmit(event);
    }
});

resultDiv.addEventListener('click', (event) => {

    const { target } = event;


    if (target.tagName === 'A' && target.innerHTML !== 'na' && target.innerHTML !== null) {
        event.preventDefault();

        const courseUrl = target.innerHTML;
        navigator.clipboard.writeText(courseUrl)
            .then(() => {
                console.log('URL copied to clipboard');
                showNotification('URL copied to clipboard!', 'success');
            })
            .catch((error) => {
                showNotification('Failed to copy URL! Please try again.', 'error');
            });
    }
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification', `notification-${type}`, 'show');
    form.appendChild(notification);

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function showLoadingPopup() {
    loadingPopup.style.display = 'block';
}

function hideLoadingPopup() {
    loadingPopup.style.display = 'none';
}