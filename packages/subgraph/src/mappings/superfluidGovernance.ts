import {
    ConfigChanged,
    RewardAddressChanged,
    CFAv1LiquidationPeriodChanged,
    TrustedForwarderChanged,
} from "../../generated/SuperfluidGovernance/SuperfluidGovernanceBase";
import {
    CFAv1LiquidationPeriodChangedEvent,
    ConfigChangedEvent,
    RewardAddressChangedEvent,
    TrustedForwarderChangedEvent,
} from "../../generated/schema";
import { createEventID } from "../utils";

export function handleConfigChanged(event: ConfigChanged): void {
    let ev = new ConfigChangedEvent(createEventID("ConfigChanged", event));
    ev.transactionHash = event.transaction.hash;
    ev.timestamp = event.block.timestamp;
    ev.name = "ConfigChanged";
    ev.addresses = [];
    ev.blockNumber = event.block.number;
    ev.host = event.params.host;
    ev.superToken = event.params.superToken;
    ev.key = event.params.key;
    ev.isKeySet = event.params.isKeySet;
    ev.value = event.params.value;
    ev.save();
}

export function handleRewardAddressChanged(event: RewardAddressChanged): void {
    let ev = new RewardAddressChangedEvent(
        createEventID("RewardAddressChanged", event)
    );
    ev.transactionHash = event.transaction.hash;
    ev.timestamp = event.block.timestamp;
    ev.name = "RewardAddressChanged";
    ev.addresses = [];
    ev.blockNumber = event.block.number;
    ev.host = event.params.host;
    ev.superToken = event.params.superToken;
    ev.isKeySet = event.params.isKeySet;
    ev.rewardAddress = event.params.rewardAddress;
    ev.save();
}

export function handleCFAv1LiquidationPeriodChanged(
    event: CFAv1LiquidationPeriodChanged
): void {
    let ev = new CFAv1LiquidationPeriodChangedEvent(
        createEventID("CFAv1LiquidationPeriodChanged", event)
    );
    ev.transactionHash = event.transaction.hash;
    ev.timestamp = event.block.timestamp;
    ev.name = "CFAv1LiquidationPeriodChanged";
    ev.addresses = [];
    ev.blockNumber = event.block.number;
    ev.host = event.params.host;
    ev.superToken = event.params.superToken;
    ev.isKeySet = event.params.isKeySet;
    ev.liquidationPeriod = event.params.liquidationPeriod;
    ev.save();
}

export function handleTrustedForwarderChanged(
    event: TrustedForwarderChanged
): void {
    let ev = new TrustedForwarderChangedEvent(
        createEventID("TrustedForwarderChanged", event)
    );
    ev.transactionHash = event.transaction.hash;
    ev.timestamp = event.block.timestamp;
    ev.name = "TrustedForwarderChanged";
    ev.addresses = [];
    ev.blockNumber = event.block.number;
    ev.host = event.params.host;
    ev.superToken = event.params.superToken;
    ev.isKeySet = event.params.isKeySet;
    ev.forwarder = event.params.forwarder;
    ev.enabled = event.params.enabled;
    ev.save();
}
