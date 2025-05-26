# Code Citations

## License: unknown
https://github.com/kodecocodes/rwi-materials/tree/c639d6cdce6371cc60c5f20eb6e6e84fed8815d8/03-data-layer-networking/projects/starter/PetSave/Core/data/coreData/Persistence.swift

```
persistentStoreDescriptions.first?.url = URL(fileURLWithPath: "/dev/null")
        
        container.loadPersistentStores { _, error in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
```


## License: Apache_2_0
https://github.com/kodecocodes/video-bcd2-materials/tree/cc36e5a4023c5b2fbb234d640f92f2001a671c11/18-deleting-launch-lists/Final/RocketLaunches/Model/Persistence.swift

```
= URL(fileURLWithPath: "/dev/null")
        }
        container.loadPersistentStores { _, error in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        }
        container.viewContext.automaticallyMergesChangesFromParent
```

