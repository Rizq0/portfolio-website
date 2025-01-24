import { Card, Text, Badge, Button, Group } from "@mantine/core";

export const MantineTest: React.FC = () => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Mantine Test Card</Text>
          <Badge color="pink" variant="light">
            Test
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          This is a test card to verify Mantine is working correctly.
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Test Button
        </Button>
      </Card>
    </>
  );
};
