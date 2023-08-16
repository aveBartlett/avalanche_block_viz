import { StarData } from "@/types/types";
import axios from 'axios';
import cheerio from 'cheerio';
import { getBlockProductionMockData } from "./MockData";
import { timeStamp } from "console";

interface TableRow {
    cells: string[];
}

export async function getSubnetBlockData(): Promise<StarData[]> { // Replace any[] with your actual data type from avascan
    return fetchDataFromMock();
}

async function fetchDataFromAvascan(): Promise<StarData[]> {
    var tableData: TableRow[] = [];

    try {
        const response = await axios.get('https://example.com');
        const html = response.data;

        const $ = cheerio.load(html);
        const rows: TableRow[] = [];

        // Assuming the table has a structure like <table><tr><td>...</td></tr>...</table>
        $('table tr').each((index, element) => {
            const cells: string[] = [];
            $(element).find('td').each((i, cell) => {
                cells.push($(cell).text());
            });
            if (cells.length) rows.push({ cells });
        });

        tableData = rows;
    } catch (error) {
        console.error('Error fetching and parsing:', error);
    }

    return convertToStarData(tableData);
}

export function convertToStarData(rawData: any[]): StarData[] {

  // Conversion logic
  // Assuming each item in rawData can be converted to StarData
  const convertedData: StarData[] = rawData.map(item => ({
    chain_name: item.chain_name,  // assuming xCoordinate exists in rawData
    chain_logo: item.chain_logo,
    transaction_num: item.transaction_num,
    timestamp: item.timeStamp
  }));

  return convertedData;
}


async function fetchDataFromMock(): Promise<StarData[]> {
    return getBlockProductionMockData(50);
}