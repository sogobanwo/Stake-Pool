import { Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'

const EachPool = ({
	totalStakers,
	rewardReserve,
	rewardRate,
	totalStakedAmount
}) => {
	return (
		<Card asChild style={{ maxWidth: 500}}>
			<Flex>
				<Flex direction={"column"}>
					<Text as="div" size="2" weight="bold">
						Total Stakers
					</Text>
					<Text as="div" color="gray" size="2">
						Number of Stake: {totalStakers}
					</Text>
				</Flex>
				<Flex direction={"column"}>
					<Text as="div" size="2" weight="bold">
						Total Reward
					</Text>
					<Text as="div" color="gray" size="2">
						Amount of reward reserved: {rewardReserve}
					</Text>
				</Flex>
				<Flex direction={"column"}>
					<Text as="div" size="2" weight="bold">
							Reward rate
					</Text>
					<Text as="div" color="gray" size="2">
						Rate of reward: {rewardRate}
					</Text>
				</Flex>
				<Flex direction={"column"}>
					<Text as="div" size="2" weight="bold">
						Staked Amount
					</Text>
					<Text as="div" color="gray" size="2">
						Total Number of amount staked: {totalStakedAmount}
					</Text>
				</Flex>
			</Flex>
		</Card>
	)
}

export default EachPool
