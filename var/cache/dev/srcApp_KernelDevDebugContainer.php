<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerYvK1VBO\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerYvK1VBO/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerYvK1VBO.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerYvK1VBO\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerYvK1VBO\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'YvK1VBO',
    'container.build_id' => 'b6405772',
    'container.build_time' => 1562509213,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerYvK1VBO');
