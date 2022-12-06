const matricInput = document.getElementById("matric-input");
const studentNameDisplay = document.getElementById("student-name");
const button = document.getElementById('button')
const recordDisplay = document.getElementById('record')

const schoolArray = [
    {
        name: "Alimi THE G.O.A.T (CREATOR)",
        matricnumber: "20/67CE/00684",
    },

    {
        name: "Abolarin Shola. J",
        matricnumber: "20/67CE/00645",
    },

    {
        name: "Bamikole Qudari. O",
        matricnumber: "20/67ce/00647",
    },

    {
        name: "Mustapha Mojere. T",
        matricnumber: "20/67CE/00648",
    },

    {
        name: "Adams Haku. E",
        matricnumber: "20/67CE/00649",
    },

    {
        name: "MBAGWU EMMANUEL",
        matricnumber: "19/67AA/00454",
    },
    {
        name: "ABIOYE OLUWADARA",
        matricnumber: "19/67CE/00507",
    },
    {
        name: "OLAREWAJU JAMIU.A",
        matricnumber: "20/67CE/0056",
    },
    {
        name: "OGUNDARE HENRY. A",
        matricnumber: "20/67CE/00564",
    },
    {
        name: "ADELEKE ABDULAZEEZ. A",
        matricnumber: "20/67CE/00565",
    },
    {
        name: "BABATUNDE HABEEBULLAH. A",
        matricnumber: "20/67CE/00573",
    },
    {
        name: "ADEWUNMI NICHOLAS. K",
        matricnumber: "20/67CE/00574 ",
    },
    {
        name: "AJAMU EMMANUEL. A",
        matricnumber: "20/67CE/00575",
    },
    {
        name: "ABDUL FATAH ASMAU. A",
        matricnumber: "20/67CE/00576",
    },
    {
        name: "ALAYANDE ABOSEDE. O",
        matricnumber: "20/67CE/00577",
    },
    {
        name: "OYEYEMI AFEEZ. I",
        matricnumber: "20/67CE/00578",
    },
    {
        name: "ADETOKUNBO JOSEPH. A",
        matricnumber: "20/67CE/00579",
    },

    {
        name: "ABDULRAHIM ABDULHAFIZ.A",
        matricnumber: "20/67CE/00580 ",
    },

    {
        name: "FAMOROTI AYOKUNLE. O",
        matricnumber: "20/67CE/00581",
    },



    {
        name: "FAMOROTI AYOKUNLE. O",
        matricnumber: "20/67CE/00581",
    },


    {
        name: "OGUNLEKE OGUNKUNLE. A",
        matricnumber: "20/67CE/00582",
    },


    {
        name: "ABDULRAUF OPEYEMI. R",
        matricnumber: "20/67CE/00583",
    },


    {
        name: "FAMOROTI AYOKUNLE. O",
        matricnumber: "20/67CE/00581",
    },


    {
        name: "ABDULGANIYU MUSTAPHA. Y",
        matricnumber: "20/67CE/0058",
    },


    {
        name: "OYESIJI QUADRI. O",
        matricnumber: "20/67CE/00586",
    },


    {
        name: "OYAWOYE JOSHUA. O",
        matricnumber: "20/67CE/00587",
    },


    {
        name: "OLESIN GAZAI ADEBAYO",
        matricnumber: "20/67CE/00588 ",
    },


    {
        name: "MASHOOD MUSTAPHA",
        matricnumber: "20/67CE/00589",
    },


    {
        name: "ADEBIYI FAITH. J",
        matricnumber: "20/67CE/00590",
    },


    {
        name: "ADEBAYO MUIDEEN. O",
        matricnumber: "20/67CE/00591",
    },


    {
        name: "MUSTAPHA AKINWUMI.A",
        matricnumber: "20/67CE/00592",
    },


    {
        name: "JAMES OPEYEMI.A ",
        matricnumber: "20/67CE/00593",
    },


    {
        name: "ADEBISI-LAWAL ABDULBASIT",
        matricnumber: "20/67CE/00594",
    },


    {
        name: "KOLAWOLE JAMIU. A",
        matricnumber: "20/67CE/00587",
    },


    {
        name: "FAMOROTI AYOKUNLE. O",
        matricnumber: "20/67CE/00581",
    },


    {
        name: "ISMAIL SOBUR. A",
        matricnumber: "20/67CE/00598 ",
    },


    {
        name: "ADEYEMO FARID. T",
        matricnumber: "20/67CE/00599",
    },


    {
        name: "MUSTAPHA OPEYEMI. A",
        matricnumber: "20/67CE/00600",
    },


    {
        name: "KALEJAIYE ABDULMUIZ.O",
        matricnumber: "20/67CE/00601",
    },


    {
        name: "JAJI KAMALDEEN. O",
        matricnumber: "20/67CE/00608",
    },


    {
        name: "OYEMIKE CYNTHIA. C",
        matricnumber: "20/67CE/00612",
    },


    {
        name: "BAMIGBOYE AYOMIDE. A",
        matricnumber: "20/67CE/00613",
    },


    {
        name: "OLAORE FATHIA. A",
        matricnumber: "20/67CE/00614",
    },


    {
        name: "DUROWADE ABDULMUJEEB. O",
        matricnumber: "20/67CE/00615",
    },


    {
        name: "ADEKOLA ADEDEJI. I",
        matricnumber: "20/67CE/00616",
    },


    {
        name: "AHMED IBRAHIM. A",
        matricnumber: "20/67CE/00617",
    },


    {
        name: "MUDASHIR ABDULHAKEEM. O",
        matricnumber: "20/67CE/00618",
    },


    {
        name: "ADAM RAMADAN. A",
        matricnumber: "20/67CE/00619",
    },


    {
        name: "OLADIMEJI FARUQ. O",
        matricnumber: "20/67CE/00620 ",
    },


    {
        name: "OLAJIDE DANIEL",
        matricnumber: "20/67CE/00622",
    },


    {
        name: "OLUDARE EMMANUEL. A",
        matricnumber: "20/67CE/00623",
    },


    {
        name: "SOTTIN AYOMIDE. G",
        matricnumber: "20/67CE/00629",
    },


    {
        name: "DAMILOLA OKEOWO",
        matricnumber: "20/67CE/00630",
    },


    {
        name: "ONIPEDE TOMISIN. E",
        matricnumber: "20/67CE/00631",
    },


    {
        name: "OKESOOTO MUHAMMED. O",
        matricnumber: "20/67CE/00633",
    },


    {
        name: "ODILI IFEANYICHUKWU",
        matricnumber: "20/67CE/00637",
    },


    {
        name: "ATOYEBI ROKIBAT. O",
        matricnumber: "20/67CE/00643 ",
    },


    {
        name: " UNEGBU OYEMAECHI. I",
        matricnumber: "20/67CE/00644",
    },


    {
        name: "BAMIKOLE QUADRI. O",
        matricnumber: "20/67CE/00647",
    },


    {
        name: "AYUB ADEGBITE",
        matricnumber: "20/67CE/00650",
    },


    {
        name: "ADEOYE TIMILEYHIN",
        matricnumber: "20/67CE/00651",
    },


    {
        name: "OGUNJIMI OLAMIDE. F",
        matricnumber: "20/67CE/00653",
    },


    {
        name: "ALABI OLALEKAN. O",
        matricnumber: "20/67CE/00663",
    },


    {
        name: "ADEDAPO OLUWASEYIFUNMI. J",
        matricnumber: "20/67CE/00667",
    },


    {
        name: "ADEBAYO HABEEB. A",
        matricnumber: "20/67CE/00670",
    },


    {
        name: "AMUYANKAN ABDULAZEEZ. S",
        matricnumber: "20/67CE/00671",
    },


    {
        name: "AYANDIRAN SAMUEL. V",
        matricnumber: "20/67CE/00672",
    },


    {
        name: "ADEBOLA BABATOMIWA. M",
        matricnumber: "20/67CE/00673",
    },


    {
        name: "ORIADE QUDUS. A",
        matricnumber: "20/67CE/00674",
    },


    {
        name: "ALIU AHMED. O",
        matricnumber: "20/67CE/00679",
    },


    {
        name: "IBRAHIM ABDULRAFIU.A ",
        matricnumber: "20/67CE/00680",
    },


    {
        name: "MAGAJI SULIEMAN.",
        matricnumber: "20/67CE/00681",
    },


    {
        name: "OLORIEBI WAREEZ. A",
        matricnumber: "20/67CE/00682",
    },


    {
        name: "ALAYA FARUQ. O",
        matricnumber: "20/67CE/00683",
    },


    {
        name: "MUHAMMADJAMIU ABDULWAHAB. A",
        matricnumber: "20/67CE/00686",
    },


    {
        name: "ADESINA ISREAL. B",
        matricnumber: "20/67CE/00687",
    },


    {
        name: "SULYMAN KAYODE",
        matricnumber: "20/67CE/00688",
    },


    {
        name: "SALAUDEEN HABEEB. O",
        matricnumber: "20/67CE/00690",
    },


    {
        name: "ADEJUMO ALIMI HIKMOT. O",
        matricnumber: "20/67CE/00691",
    },


    {
        name: "ABDULBASIT OLAREWAJU. A",
        matricnumber: "20/67CE/00692",
    },


    {
        name: "SALAMI TOBILOBA.K",
        matricnumber: "20/67CE/00693",
    },


    {
        name: "AIYEDUN ABDULRAHMAN. O",
        matricnumber: "20/67CE/00695",
    },


    {
        name: "AJIBADE DANIEL. J",
        matricnumber: "20/67CE/00696",
    },


    {
        name: "LAWAL ABDULSOBUR. A",
        matricnumber: "20/67CE/00697",
    },


    {
        name: "FAMOROTI AYOKUNLE. O",
        matricnumber: "20/67CE/00581",
    },


    {
        name: "ADENIRAN HABEEB. A",
        matricnumber: "20/67CE/00698",
    },


    {
        name: "ALADE AYOMIDE. F",
        matricnumber: "20/67CE/00699",
    },


    {
        name: "ABDULFATAI TESLIM. A",
        matricnumber: "20/67CE/00700",
    },


    {
        name: "OLAOLUWA OLAYORJU. D",
        matricnumber: "20/67CE/00701",
    },


    {
        name: "ARINDE BLESSING. E",
        matricnumber: "20/67CE/00702",
    },


    {
        name: "OGUNTOYINBO OLADOTUN. I",
        matricnumber: "20/67CE/00703",
    },


    {
        name: "AREMU FAWAS. A ",
        matricnumber: "20/67CE/00705",
    },


    {
        name: "SULAIMAN ABDULHAMID. K",
        matricnumber: "20/67CE/00706",
    },


    {
        name: "ODUNSI ABDULQUADRI. O",
        matricnumber: "20/67CE/00707",
    },


    {
        name: "YUSUF ABDUL-GAFAR. A",
        matricnumber: "20/67CE/00709",
    },


    {
        name: "RASHEED DAVID. O",
        matricnumber: "20/67CE/00710 ",
    },


    {
        name: "ABULRAHEEM AFEEZ",
        matricnumber: "21/67CE/00763",
    },


    {
        name: "OLURUNDARE MUKHTAR BUKOLA",
        matricnumber: "21D/67CE/00712",
    },

    {
        name: "OWOEYE BELOVETH. O",
        matricnumber: "21D/67CE/00719",
    },

    {
        name: "BABADERINWA HABEEBLAHI. A",
        matricnumber: "21D/67CE/00735",
    },

    {
        name: "ABDULGANIYU IBRAHIM. A",
        matricnumber: "21D/67CE/00756",
    },

    {
        name: "IWUMEZIE UCHECHUKWU.M",
        matricnumber: "21D/67CE/00759",
    },

    {
        name: "OYENIYI PETER JUWON",
        matricnumber: "21D/67CE/00761",
    },

    {
        name: "SULTAN OLAYINKA.O",
        matricnumber: "21D/67CE/00773",
    },

    {
        name: "OKUBADEJO SULTAN O",
        matricnumber: "21D/67CE/00773",
    },

    {
        name: "AJEIGBE ABIODUN",
        matricnumber: "21D/67CE/00778",
    },

    {
        name: "OLADIMEJI DAMILARE",
        matricnumber: "21D/67CE/00780",
    },

    {
        name: "ABDULKAREEM RIDWAN JIBOLA ",
        matricnumber: "21D/67CE/00785 ",
    },

    {
        name: "YUSUF ADEWALE.JIMOH",
        matricnumber: "21D/67CE/00798",
    },

    {
        name: "ISIAQ ISMAIL FIKAYO",
        matricnumber: "21D/67CE/00801",
    },

    {
        name: "OYEBAMIJI OLORUNFEMI.T",
        matricnumber: "21D/67CE/00802",
    },

    {
        name: "BELLO YUSUFF AKINTOLA",
        matricnumber: "21D/67CE/00804",
    },

    {
        name: "ABDULLAHI BOLAJI ISMAIL",
        matricnumber: "21D/67CE/00805",
    },

    {
        name: "MORAKINYO MUBARAK.A",
        matricnumber: "21D/67CE/00806",
    },

    {
        name: "OLANIYAN GIDEON DAMILARE",
        matricnumber: "21D/67CE/00807",
    },

    {
        name: "OLADEJI KEHIDE",
        matricnumber: "21D/67CE/00808",
    },

    {
        name: "ADEWALE BABATUNDE RIDWAN",
        matricnumber: "21D/67CE/00812",
    },

    {
        name: "ISMAIL ENIAFE AISHA OPEYEMI",
        matricnumber: "21D/67CE/00814",
    },

    {
        name: "MUHIDEEN ADEMOLA O",
        matricnumber: "21D/67CE/00815",
    },

    {
        name: "OLAJIDE OLAWADAMILOLA",
        matricnumber: "21D/67CE/00816",
    },

    {
        name: "OYEDELE EMMANUEL",
        matricnumber: "21D/67CE/00819",
    },

    {
        name: "ELEJA TAIWO JAMES",
        matricnumber: "21D/67CE/00821",
    },

    {
        name: "AKINROTIMI MORAKINYO.E",
        matricnumber: "21D/67CE/00822",
    },

    {
        name: "OLUJOBI OLUWATIMILEHIN SAMUEL",
        matricnumber: "21D/67CE/00823",
    },

    {
        name: "ABDULMARUF RIDWAN",
        matricnumber: "21D/67CE/00828",
    },

    {
        name: "JONES EMMANUEL G",
        matricnumber: "21D/67CE/00829 ",
    },

    {
        name: "OLAWALE FAITH.O",
        matricnumber: "21D/67CE/00831",
    },

    {
        name: "SALIU ABDULRAZAK",
        matricnumber: "21D/67CE/00832",
    },

    {
        name: "IHENYEN OBOKHAI GODSPOWER",
        matricnumber: "21D/67CE/00833",
    },

    {
        name: "JUNAID TAIWO EMMANUEL",
        matricnumber: "21D/67CE/00836",
    },

    {
        name: "AJADI OLAITAN TAJUDEEN",
        matricnumber: "21D/67CE/00838",
    },
];

function matricNumberChecker() {
    for (let i = 0; i < schoolArray.length; i++) {
        if (matricInput.value === schoolArray[i].matricnumber) {
            studentNameDisplay.innerHTML = schoolArray[i].name
            let record = 'record Found'
            recordDisplay.innerHTML = record
        }

    }


}


setInterval

button.addEventListener('click', matricNumberChecker)

console.log(schoolArray.length)
