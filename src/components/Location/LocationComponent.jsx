import { BaseDropdown } from "src/components/Dropdown/BaseDropdown";
import { LocationDropdown } from "src/components/Dropdown/LocationDropdown";
import { Box, Button, Stack, TextField, Chip } from '@mui/joy';

import { Fragment, useEffect, useState } from "react";
import { LocationService } from "src/services/api/LocationService";


function LocationComponent({
    defaultLocation,
    onSave,
    availableProductToDistribute
}) {
    const [branch, setBranch] = useState(null);
    const [floors, setFloors] = useState();
    const [sections, setSections] = useState();
    const [racks, setRacks] = useState();
    const [shelfs, setShelfs] = useState();
    const [bins, setBins] = useState();

    const maxQuantity = parseFloat(availableProductToDistribute?.());

    const initalValues = {
        branch: null,
        floor: null,
        section: null,
        rack: null,
        shelf: null,
        bin: null,
        qty: 0,
        alias: ''
    };

    const [obj, setObj] = useState(initalValues);

    useEffect(() => {
        (async () => {
            if (defaultLocation) {
                const response = await LocationService.get(defaultLocation);
                if (response && response.data) {
                    setBranch(response.data);
                    setObj({ branch: response.data });
                    setFloors(response?.data?.floors);
                }
            }
        })();
    }, [defaultLocation]);

    return (
        <Box>
            <Stack direction={{ sx: 'column', md: 'row' }} spacing={2}>
                <LocationDropdown props={{
                    name: 'location',
                    value: defaultLocation,
                    disabled: true
                }}
                    label={'Location'}
                    helperText={'Select Valid Location'} />

                {floors?.length > 0 && (
                    <BaseDropdown props={{
                        name: 'floor',
                        onChange: (e) => {

                            setObj({
                                ...obj,
                                floor: branch?.floors?.find(f => f.id === e.target.value)
                            })

                            setSections(branch?.floors?.find(f => f.id === e.target.value)?.sections);
                        }
                    }}
                        options={floors}
                        label={'Floors'}
                        helperText={'Select Valid Floor'} />
                )}

                {sections?.length > 0 && (
                    <BaseDropdown props={{
                        name: 'section',
                        onChange: (e) => {

                            setObj({
                                ...obj,
                                section: sections?.find(s => s.id === e.target.value)
                            })

                            setRacks(sections?.find(s => s.id === e.target.value).racks);

                        }
                    }}
                        options={sections}
                        label={'Section'}
                        helperText={'Select Valid Section'} />
                )}

                {racks?.length > 0 && (
                    <BaseDropdown props={{
                        name: 'rack',
                        onChange: (e) => {
                            setObj({
                                ...obj,
                                rack: racks?.find(r => r?.id === e.target.value)
                            });

                            setShelfs(racks?.find(r => r?.id === e.target.value).shelfs);
                        }
                    }}
                        options={racks}
                        label={'Rack'}
                        helperText={'Select Valid Racks'} />
                )}

                {shelfs?.length > 0 && (
                    <BaseDropdown props={{
                        name: 'shelf',
                        onChange: (e) => {
                            setObj({
                                ...obj,
                                shelf: shelfs?.find(s => s?.id === e.target.value)
                            });

                            setBins(shelfs?.find(s => s?.id === e.target.value).bins)
                        }
                    }}
                        options={shelfs}
                        label={'Shelf'}
                        helperText={'Select Valid Shelf'} />
                )}

                {bins?.length > 0 && (
                    <BaseDropdown props={{
                        name: 'bin',
                        onChange: (e) => setObj({
                            ...obj,
                            bin: bins?.find(b => b?.id === e.target.value)
                        }),

                    }}
                        options={bins}
                        label={'Bins'}
                        helperText={'Select Valid Bin'} />
                )}

            </Stack>

            <Stack direction={'row'} alignItems={'end'} spacing={2}>
                <TextField
                    margin="dense"
                    fullWidth
                    name="quantity"
                    label={
                        <Fragment>
                            Product Quantity &nbsp; <Chip variant='outlined'>Available Quantity : {maxQuantity}</Chip>
                        </Fragment>
                    }
                    variant="soft"
                    value={obj.qty || ''}
                    size="md"
                    onChange={(e) => setObj({ ...obj, qty: e.target.value })}
                    error={obj.qty < 1 || obj.qty > maxQuantity}
                    type='number'
                />
                <Button
                    onClick={() => {

                        let alias = [];

                        if (obj.branch) {
                            alias.push(obj.branch?.name)
                        }

                        if (obj.floor) {
                            alias.push(obj.floor?.name);
                        }

                        if (obj.section) {
                            alias.push(obj.section?.name);
                        }

                        if (obj.rack) {
                            alias.push(obj.rack?.name);
                        }

                        if (obj.shelf) {
                            alias.push(obj.shelf?.name);
                        }

                        if (obj.bin) {
                            alias.push(obj.bin?.name);
                        }

                        obj.alias = alias.join('-');
                        if (obj.branch) {
                            obj.branch = defaultLocation;
                        }
                        if (obj.floor) {
                            obj.floor = obj.floor?.id;
                        }
                        if (obj.section) {
                            obj.section = obj.section?.id;
                        }
                        if (obj.rack) {
                            obj.rack = obj.rack?.id;
                        }
                        if (obj.shelf) {
                            obj.shelf = obj.shelf?.id;
                        }
                        if (obj.bin) {
                            obj.bin = obj.bin?.id;
                        }
                        onSave(obj);
                    }}
                    disabled={(!obj.branch || !obj.qty || obj.qty < 1 || obj.qty > maxQuantity)}
                >Save</Button>
            </Stack>
        </Box>
    );
}

export {
    LocationComponent
}