import { Box } from "@chakra-ui/react";

function GenericPage({ page }: { page: React.ReactNode }) {
  return (
    <Box marginX="15%" border="1px solid red">
      {page}
    </Box>
  );
}

export default GenericPage;
