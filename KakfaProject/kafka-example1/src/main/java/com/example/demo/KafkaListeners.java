package com.example.demo;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaListeners {
	
	@KafkaListener(
			topics="demoTopic",
			groupId="groupId"
			)
	void listener(String data) {
		System.out.println("Listener recieved: " + data + "");
	}

}
