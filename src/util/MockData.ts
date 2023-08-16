import { StarData } from "@/types/types";

export function getBlockProductionMockData(count: number): StarData[] {

    //subnet data blocks
    const StarDataExamples = [{
            chain_name: "StepNetwork",
            chain_logo: "https://cms-cdn.avascan.com/FIFTI_tondo_b0abff1a90.png",
            transaction_num: 1,
            timestamp: new Date()
            },{
            chain_name: "XanaChain",
            chain_logo: "https://cms-cdn.avascan.com/Xeta_Token_removebg_preview_f0bdab0f76.png",
            transaction_num: 1,
            timestamp: new Date()
        },{
            chain_name: "C-Chain",
            chain_logo: "https://cms-cdn.avascan.com/C_Chain_2_1b9d397d29.png",
            transaction_num: 1,
            timestamp: new Date()
        },{
            chain_name: "DFX Chain",
            chain_logo: "https://cms-cdn.avascan.com/Qm_QB_48m15_Tzh_U_Frmu56_QCR_Qjkrkg_Ua_Kfg_Cm_KE_8o3_Rzmu_PJ_removebg_preview_f505a0035a.png",
            transaction_num: 1,
            timestamp: new Date()
        },{
            chain_name: "Dexalot Chain",
            chain_logo: "https://cms-cdn.avascan.com/DEXALOT_Logo_Mark_4x_ac1f909cd1.png",
            transaction_num: 1,
            timestamp: new Date()
        },{
            chain_name: "Meld",
            chain_logo: "https://cms-cdn.avascan.com/small_meld_67fae9147d.png",
            transaction_num: 1,
            timestamp: new Date()
        }, {
            chain_name: "UPTN",
            chain_logo: "https://cms-cdn.avascan.com/uptn-logo-cb623ccecc.png",
            transaction_num: 1,
            timestamp: new Date()
        }, {
            chain_name: "DOS",
            chain_logo: "https://cms-cdn.avascan.com/DOS_logo_Circle_446d040f4f.svg",
            transaction_num: 1,
            timestamp: new Date()
        }, {
            chain_name: "Numbers",
            chain_logo: "https://cms-cdn.avascan.com/Numbers_02_a87d3b077c_e5ef9f696b.png",
            transaction_num: 1,
            timestamp: new Date()
        }
    ]

    let millisecondsToAdd = 0;

    //return in random
    const mockStarData = Array.from({ length: count }, () => {
        const randomIndex = Math.floor(Math.random() * StarDataExamples.length);
        const randomObj = { ...StarDataExamples[randomIndex] };
        randomObj.timestamp = new Date(Date.now() + millisecondsToAdd);
        millisecondsToAdd += Math.floor(Math.random() * 50)+ 5; // Add random milliseconds for the next iteration
        randomObj.transaction_num = Math.floor(Math.random() * 10); //random transaction number size
        return randomObj;
    });

    return mockStarData;
}