ModAPI.registerAPI("CoreEngineAPI", {
    MathHelper,
    Utils,
    RenderHelper,
    RenderSide,
    BlockAnimation,
    EDestroyLevel,
    Vector3,
    ItemStack,
    BasicBlock,
    BlockModel,
    BlockPlant,
    BlockBush,
    Keyboard,
    UIHelper,
    PlayerUser,
    Bark,
    Hewn,
    Log,
    Planks,
    RotatableLog,
    BasicItem,
    Command,
    ClientCommand,
    ServerCommand,
    CommonTileEntity,
    LocalTileEntity,
    NetworkEvent,
    ContainerEvent,
    WorldSaves,
    Dimension,
    requireGlobal(command: string) {
		  return eval(command);
	  }
});