// SPDX-License-Identifier: MIT
pragma solidity ^0.7.2;

abstract contract MerkleZeros {
    uint256[33] internal zeros;

    // Quinary tree zeros (hash of a blank state leaf)
    constructor() {
        zeros[0] = uint256(6769006970205099520508948723718471724660867171122235270773600567925038008762);
        zeros[1] = uint256(1817443256073160983037956906834195537015546107754139333779374752610409243040);
        zeros[2] = uint256(5025334324706345710800763986625066818722194863275454698142520938431664775139);
        zeros[3] = uint256(14192954438167108345302805021925904074255585459982294518284934685870159779036);
        zeros[4] = uint256(20187882570958996766847085412101405873580281668670041750401431925441526137696);
        zeros[5] = uint256(19003337309269317766726592380821628773167513668895143249995308839385810331053);
        zeros[6] = uint256(8492845964288036916491732908697290386617362835683911619537012952509890847451);
        zeros[7] = uint256(21317322053785868903775560086424946986124609731059541056518805391492871868814);
        zeros[8] = uint256(4256218134522031233385262696416028085306220785615095518146227774336224649500);
        zeros[9] = uint256(20901832483812704342876390942522900825096860186886589193649848721504734341597);
        zeros[10] = uint256(9267454486648593048583319961333207622177969074484816717792204743506543655505);
        zeros[11] = uint256(7650747654726613674993974917452464536868175649563857452207429547024788245109);
        zeros[12] = uint256(12795449162487060618571749226308575208199045387848354123797521555997299022426);
        zeros[13] = uint256(2618557044910497521493457299926978327841926538380467450910611798747947773417);
        zeros[14] = uint256(4921285654960018268026585535199462620025474147042548993648101553653712920841);
        zeros[15] = uint256(3955171118947393404895230582611078362154691627898437205118006583966987624963);
        zeros[16] = uint256(14699122743207261418107167543163571550551347592030521489185842204376855027947);
        zeros[17] = uint256(19194001556311522650950142975587831061973644651464593103195262630226529549573);
        zeros[18] = uint256(6797319293744791648201295415173228627305696583566554220235084234134847845566);
        zeros[19] = uint256(1267384159070923114421683251804507954363252272096341442482679590950570779538);
        zeros[20] = uint256(3856223245980092789300785214737986268213218594679123772901587106666007826613);
        zeros[21] = uint256(18676489457897260843888223351978541467312325190019940958023830749320128516742);
        zeros[22] = uint256(1264182110328471160091364892521750324454825019784514769029658712768604765832);
        zeros[23] = uint256(2656996430278859489720531694992812241970377217691981498421470018287262214836);
        zeros[24] = uint256(18383091906017498328025573868990834275527351249551450291689105976789994000945);
        zeros[25] = uint256(13529005048172217954112431586843818755284974925259175262114689118374272942448);
        zeros[26] = uint256(12992932230018177961399273443546858115054107741258772159002781102941121463198);
        zeros[27] = uint256(2863122912185356538647249583178796893334871904920344676880115119793539219810);
        zeros[28] = uint256(21225940722224750787686036600289689346822264717843340643526494987845938066724);
        zeros[29] = uint256(10287710058152238258370855601473179390407624438853416678054122418589867334291);
        zeros[30] = uint256(19473882726731003241332772446613588021823731071450664115530121948154136765165);
        zeros[31] = uint256(5317840242664832852914696563734700089268851122527105938301831862363938018455);
        zeros[32] = uint256(16560004488485252485490851383643926099553282582813695748927880827248594395952);
    }
}

