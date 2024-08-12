// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract MerkleZeros {
  uint256[33] internal zeros;

  // Binary tree zeros (Keccak hash of 'Maci')
  constructor() {
    zeros[0] = uint256(8370432830353022751713833565135785980866757267633941821328460903436894336785);
    zeros[1] = uint256(13883108378505681706501741077199723943829197421795883447299356576923144768890);
    zeros[2] = uint256(15419121528227002346615807695865368688447806543310218580451656713665933966440);
    zeros[3] = uint256(6318262337906428951291657677634338300639543013249211096760913778778957055324);
    zeros[4] = uint256(17768974272065709481357540291486641669761745417382244600494648537227290564775);
    zeros[5] = uint256(1030673773521289386438564854581137730704523062376261329171486101180288653537);
    zeros[6] = uint256(2456832313683926177308273721786391957119973242153180895324076357329047000368);
    zeros[7] = uint256(8719489529991410281576768848178751308798998844697260960510058606396118487868);
    zeros[8] = uint256(1562826620410077272445821684229580081819470607145780146992088471567204924361);
    zeros[9] = uint256(2594027261737512958249111386518678417918764295906952540494120924791242533396);
    zeros[10] = uint256(7454652670930646290900416353463196053308124896106736687630886047764171239135);
    zeros[11] = uint256(5636576387316613237724264020484439958003062686927585603917058282562092206685);
    zeros[12] = uint256(6668187911340361678685285736007075111202281125695563765600491898900267193410);
    zeros[13] = uint256(11734657993452490720698582048616543923742816272311967755126326688155661525563);
    zeros[14] = uint256(13463263143201754346725031241082259239721783038365287587742190796879610964010);
    zeros[15] = uint256(7428603293293611296009716236093531014060986236553797730743998024965500409844);
    zeros[16] = uint256(3220236805148173410173179641641444848417275827082321553459407052920864882112);
    zeros[17] = uint256(5702296734156546101402281555025360809782656712426280862196339683480526959100);
    zeros[18] = uint256(18054517726590450486276822815339944904333304893252063892146748222745553261079);
    zeros[19] = uint256(15845875411090302918698896692858436856780638250734551924718281082237259235021);
    zeros[20] = uint256(15856603049544947491266127020967880429380981635456797667765381929897773527801);
    zeros[21] = uint256(16947753390809968528626765677597268982507786090032633631001054889144749318212);
    zeros[22] = uint256(4409871880435963944009375001829093050579733540305802511310772748245088379588);
    zeros[23] = uint256(3999924973235726549616800282209401324088787314476870617570702819461808743202);
    zeros[24] = uint256(5910085476731597359542102744346894725393370185329725031545263392891885548800);
    zeros[25] = uint256(8329789525184689042321668445575725185257025982565085347238469712583602374435);
    zeros[26] = uint256(21731745958669991600655184668442493750937309130671773804712887133863507145115);
    zeros[27] = uint256(13908786229946466860099145463206281117295829828306413881947857340025780878375);
    zeros[28] = uint256(2746378384965515118858350021060497341885459652705230422460541446030288889144);
    zeros[29] = uint256(4024247518003740702537513711866227003187955635058512298109553363285388770811);
    zeros[30] = uint256(13465368596069181921705381841358161201578991047593533252870698635661853557810);
    zeros[31] = uint256(1901585547727445451328488557530824986692473576054582208711800336656801352314);
    zeros[32] = uint256(3444131905730490180878137209421656122704458854785641062326389124060978485990);
  }
}