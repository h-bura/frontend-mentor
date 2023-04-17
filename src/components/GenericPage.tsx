import { Box, useMediaQuery } from "@chakra-ui/react";

function GenericPage({ page }: { page: React.ReactNode }) {
  const [isLargerThan1315] = useMediaQuery("(min-width: 1310px)");
  return <Box marginX={isLargerThan1315 ? "12%" : ""}>{page}</Box>;
}

export default GenericPage;
