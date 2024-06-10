import { Container, VStack, Box, Input, Button, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="scroll" p={4}>
          {messages.map((msg, index) => (
            <Box key={index} p={2} bg="gray.100" borderRadius="md" mb={2}>
              <Text>{msg}</Text>
            </Box>
          ))}
        </Box>
        <Flex width="100%">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} ml={2}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;